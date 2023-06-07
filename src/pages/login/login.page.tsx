import { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineLogin } from "react-icons/ai";
import { useForm } from "react-hook-form";
import validator from "validator";
import { useNavigate } from "react-router-dom";

//Utils
import {
  AuthError,
  AuthErrorCodes,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { auth, db, googleProvider } from "../../config/firebase.config";
import { useAppSelector } from "../../hooks/redux.hooks";

// Components
import Loading from "../../components/loading/loading.component";
import Header from "../../components/header/header.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import CustomInput from "../../components/custom-input/custom-input.component";
import InputErrorMessage from "../../components/input-error-message/input-error-message.component";

// Styles
import {
  LoginContainer,
  LoginContent,
  LoginHeadline,
  LoginInputContainer,
  LoginSubtitle,
} from "./login.styles";

interface LoginForm {
  email: string;
  password: string;
}

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginForm>();

  const [isLoading, setIsLoading] = useState(false);

  const { isAuthenticated } = useAppSelector(
    (rootReducer) => rootReducer.userReducer
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
    // eslint-disable-next-line
  }, [isAuthenticated]);

  const handleSubmitPress = async (data: LoginForm) => {
    try {
      setIsLoading(true);

      const userCredentials = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      console.log({ userCredentials });
    } catch (error) {
      const _error = error as AuthError;

      if (_error.code === AuthErrorCodes.INVALID_PASSWORD) {
        return setError("password", { type: "mismatch" });
      }

      if (_error.code === AuthErrorCodes.USER_DELETED) {
        return setError("email", { type: "notFound" });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignInWithGooglePress = async () => {
    try {
      setIsLoading(true);

      const userCredentials = await signInWithPopup(auth, googleProvider);

      const querySnapshot = await getDocs(
        query(
          collection(db, "users"),
          where("id", "==", userCredentials.user.uid)
        )
      );

      const user = querySnapshot.docs[0]?.data();

      if (!user) {
        const firstName = userCredentials.user.displayName?.split(" ")[0];
        const lastName = userCredentials.user.displayName?.split(" ")[1];

        await addDoc(collection(db, "users"), {
          id: userCredentials.user.uid,
          email: userCredentials.user.email,
          firstName,
          lastName,
          provider: "google",
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header />
      {isLoading && <Loading />}
      <LoginContainer>
        <LoginContent>
          <LoginHeadline>Login with your account</LoginHeadline>

          <CustomButton
            startIcon={<FcGoogle size={18} />}
            onClick={handleSignInWithGooglePress}
          >
            Login with Google
          </CustomButton>

          <LoginSubtitle>Or Login with your e-mail</LoginSubtitle>

          <LoginInputContainer>
            <p>E-mail</p>
            <CustomInput
              hasError={!!errors?.email}
              placeholder="Type your e-mail"
              {...register("email", {
                required: true,
                validate: (value) => {
                  return validator.isEmail(value);
                },
              })}
            />

            {errors?.email?.type === "required" && (
              <InputErrorMessage>E-mail is required.</InputErrorMessage>
            )}

            {errors?.email?.type === "notFound" && (
              <InputErrorMessage>E-mail not found.</InputErrorMessage>
            )}

            {errors?.email?.type === "validate" && (
              <InputErrorMessage>Add a valid e-mail.</InputErrorMessage>
            )}
          </LoginInputContainer>

          <LoginInputContainer>
            <p>Password</p>
            <CustomInput
              hasError={!!errors?.password}
              placeholder="Type your password"
              type="password"
              {...register("password", { required: true })}
            />

            {errors?.password?.type === "required" && (
              <InputErrorMessage>The password is required.</InputErrorMessage>
            )}
          </LoginInputContainer>

          {errors?.password?.type === "mismatch" && (
            <InputErrorMessage>Invalid password.</InputErrorMessage>
          )}

          <CustomButton
            startIcon={<AiOutlineLogin size={18} />}
            onClick={() => handleSubmit(handleSubmitPress)()}
          >
            login
          </CustomButton>
        </LoginContent>
      </LoginContainer>
    </>
  );
};

export default LoginPage;
