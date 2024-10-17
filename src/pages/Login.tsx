import { TextInput, Button, Group, PasswordInput, Center } from "@mantine/core";
import { useForm } from "@mantine/form";
// import { makeToast } from "common/helpers";
import { Text } from "@mantine/core";
// import { useNavigate } from "react-router-dom";
// import { APP_ROUTES } from "constants/constants";
// import { setAuthToken } from "services/auth";
import { LoadingSpinnerScreen } from "components/LoadingSpinner";

const Login = () => {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: (value) => (/^[^\s@]{2,}@[^\s@]{2,}\.[^\s@]{2,}$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        /^(?=.*[A-Za-z])(?=.*\d).{6,}$/.test(value)
          ? null
          : "Password must be atleast 6 character long and must contain atleast 1 letter & 1 number",
    },
  });

  // const navigate = useNavigate();
  // const [login, { isLoading }] = useLoginMutation();

  const handleLogin = async () => {
    // const payload = { email, password };
    // login(payload)
    //   .unwrap()
    //   .then((result) => {
    //     setAuthToken(result.token);
    //     makeToast("Logged In", "success");
    //     navigate(APP_ROUTES.Dashboard);
    //   });
  };

  return (
    <Center style={{ width: "100vw", height: "100vh" }}>
      <LoadingSpinnerScreen show={false} />
      <div>
        <Text fw={700} ta="center" size="xl">
          Login
        </Text>
        <form style={{ width: 340 }} onSubmit={form.onSubmit(handleLogin)}>
          <TextInput
            withAsterisk
            type="email"
            label="Email"
            placeholder="your@email.com"
            {...form.getInputProps("email")}
          />
          <PasswordInput withAsterisk label="Password" {...form.getInputProps("password")} mt={10} />
          <Group justify="flex-end" mt="md">
            <Button type="submit">Submit</Button>
          </Group>
        </form>
      </div>
    </Center>
  );
};
export default Login;
