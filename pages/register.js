import Header from "@components/Header";
import Head from "next/head";
import Input from "@components/Input";
import Button from "@components/Button";
import { useRouter } from "next/router";
import { useForm, Controller } from "react-hook-form";
import ErrorMessage from "@components/ErrorMessage";
import { registerHandler } from "@services/services";
import { useLoader } from "@contexts/LoaderContext";
import { useError } from "@contexts/ErrorContext";
import Container from "@components/Container";

const Register = () => {
  const router = useRouter();
  const { setIsLoading } = useLoader();
  const { setErrors, errors: apiErrors } = useError();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      await registerHandler(data);
      router.push("/login").finally(() => setIsLoading(false));
    } catch (error) {
      setErrors(error.response.data.message);
      setIsLoading(false);
    }
  };

  const clearErronOnField = () => setErrors();

  return (
    <form onKeyDown={clearErronOnField} onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <Head>
          <title>Simpledo Register</title>
          <meta name="description" content="Simpledo Register" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header
          title="Welcome!"
          subtitle="Sign up to start using Simpledo today."
        />
        <Controller
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="Full Name"
              onChange={onChange}
              value={value || ""}
              type="text"
            />
          )}
          name="full_name"
          control={control}
          rules={{
            required: "Full name is required",
            minLength: {
              value: 4,
              message: "Minimum length is 4",
            },
            maxLength: {
              value: 26,
              message: "Maximum length is 26",
            },
          }}
        />
        <ErrorMessage errorMessage={errors.full_name?.message} />

        <Controller
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="Email"
              onChange={onChange}
              value={value || ""}
              type="email"
            />
          )}
          name="email"
          control={control}
          rules={{
            required: "Email is required",
            pattern: {
              value:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Invalid email address",
            },
          }}
        />
        <ErrorMessage errorMessage={errors.email?.message} />

        <Controller
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="Password"
              onChange={onChange}
              value={value || ""}
              type="password"
            />
          )}
          name="password"
          control={control}
          rules={{
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must contain at least 8 characters",
            },
          }}
        />
        <ErrorMessage errorMessage={errors.password?.message} />

        <a className="have-account-cta" onClick={() => router.push("/login")}>
          Do you have an account? Sign in.
        </a>
        <Button text="Sign Up" onClick={handleSubmit(onSubmit)} />
        {apiErrors && (
          <ErrorMessage
            errorMessage={apiErrors}
            style={{ textAlign: "center", marginTop: 15, marginBottom: 15 }}
          />
        )}
      </Container>
    </form>
  );
};

export default Register;
