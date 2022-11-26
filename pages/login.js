import Header from "@components/Header";
import Head from "next/head";
import Input from "@components/Input";
import Button from "@components/Button";
import { useRouter } from "next/router";
import Container from "@components/Container";
import { useForm, Controller } from "react-hook-form";
import ErrorMessage from "@components/ErrorMessage";
import { loginHandler } from "@services/services";
import { useLoader } from "@contexts/LoaderContext";
import Cookies from "js-cookie";
import { useError } from "@contexts/ErrorContext";

const Login = () => {
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
      const response = await loginHandler(data);
      Cookies.set("access_token", response.token, { expires: 1 });
      router.push("/").finally(() => setIsLoading(false));
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
          <title>Simpledo Login</title>
          <meta name="description" content="Simpledo Login" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header
          title="Welcome!"
          subtitle="Sign up to start using Simpledo today."
        />

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

        <a
          className="have-account-cta"
          onClick={() => router.push("/register")}
        >
          Don't have an account? Sign up.
        </a>

        <Button text="Log in" onClick={handleSubmit(onSubmit)} />
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

export default Login;
