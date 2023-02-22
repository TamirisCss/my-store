import { useEffect, useState } from "react";
import { AiOutlineLogin } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import validator from "validator";
import { addDoc, collection } from "firebase/firestore";

//Utils
import {
  AuthError,
  createUserWithEmailAndPassword,
  AuthErrorCodes,
} from "firebase/auth";
import { auth, db } from "../../config/firebase.config";
import { useAppSelector } from "../../hooks/redux.hooks";

// Components
import Loading from "../../components/loading/loading.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import CustomInput from "../../components/custom-input/custom-input.component";
import Header from "../../components/header/header.component";
import InputErrorMessage from "../../components/input-error-message/input-error-message.component";

// Styles
import {
  SignUpContainer,
  SignUpContent,
  SignUpHeadline,
  SignUpInputContainer,
} from "./sign-up.styles";

interface SignUpForm {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm<SignUpForm>();

  const [isLoading, setIsLoading] = useState(false);

  const watchPassword = watch("password");

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

  const handleSubmitPress = async (data: SignUpForm) => {
    try {
      setIsLoading(true);

      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      console.log({ userCredentials });

      await addDoc(collection(db, "users"), {
        id: userCredentials.user.uid,
        email: userCredentials.user.email,
        firstName: data.firstName,
        lastName: data.lastName,
        provider: "firebase",
      });
    } catch (error) {
      const _error = error as AuthError;

      if (_error.code === AuthErrorCodes.EMAIL_EXISTS) {
        return setError("email", { type: "alreadyInUse" });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header />
      {isLoading && <Loading />}
      <SignUpContainer>
        <SignUpContent>
          <SignUpHeadline>Create your account</SignUpHeadline>

          <SignUpInputContainer>
            <p>Name</p>
            <CustomInput
              hasError={!!errors?.firstName}
              placeholder="Type your name"
              {...register("firstName", { required: true })}
            />

            {errors?.firstName?.type === "required" && (
              <InputErrorMessage>Name is required.</InputErrorMessage>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Last name</p>
            <CustomInput
              hasError={!!errors?.lastName}
              placeholder="Type your lastname"
              {...register("lastName", { required: true })}
            />

            {errors?.lastName?.type === "required" && (
              <InputErrorMessage>Last name is required.</InputErrorMessage>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
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

            {errors?.email?.type === "alreadyInUse" && (
              <InputErrorMessage>
                This e-mail is alredy in use.
              </InputErrorMessage>
            )}

            {errors?.email?.type === "validate" && (
              <InputErrorMessage>Add a valid e-mail.</InputErrorMessage>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Password</p>
            <CustomInput
              hasError={!!errors?.password}
              placeholder="Type your password"
              type="password"
              {...register("password", { required: true, minLength: 6 })}
            />

            {errors?.password?.type === "required" && (
              <InputErrorMessage>The password is required.</InputErrorMessage>
            )}

            {errors?.password?.type === "minLength" && (
              <InputErrorMessage>
                A senha precisa ter no mínimo 6 caracteres. Password need
                minimum 6 characters
              </InputErrorMessage>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Confirm your password</p>
            <CustomInput
              hasError={!!errors?.passwordConfirmation}
              placeholder="Confirm password"
              type="password"
              {...register("passwordConfirmation", {
                required: true,
                minLength: 6,
                validate: (value) => {
                  return value === watchPassword;
                },
              })}
            />

            {errors?.passwordConfirmation?.type === "required" && (
              <InputErrorMessage>
                Password confirmation is required
              </InputErrorMessage>
            )}

            {errors?.passwordConfirmation?.type === "minLength" && (
              <InputErrorMessage>
                Password confirmation needs minimum 6 characters.
              </InputErrorMessage>
            )}

            {errors?.passwordConfirmation?.type === "validate" && (
              <InputErrorMessage>Password is not the same</InputErrorMessage>
            )}
          </SignUpInputContainer>

          <CustomButton
            onClick={() => handleSubmit(handleSubmitPress)()}
            startIcon={<AiOutlineLogin size={18} />}
          >
            Create account
          </CustomButton>
        </SignUpContent>
      </SignUpContainer>
    </>
  );
};

export default SignUpPage;
