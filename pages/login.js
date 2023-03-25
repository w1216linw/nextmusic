import { getProviders, signIn } from "next-auth/react";

const Login = ({ providers }) => {
  return (
    <div className="grid place-content-center  h-screen bg-black gap-5">
      <img className="max-w-xl" src="./spotify.jpg" alt="spotify" />
      {Object.values(providers).map((provider) => (
        <button
          key={provider.name}
          className="bg-green-500 p-4 px-6 rounded-full text-lg w-max m-auto"
          onClick={() => signIn(provider.id, { callbackUrl: "/" })}
        >
          Login with {provider.name}
        </button>
      ))}
    </div>
  );
};

export default Login;
export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}
