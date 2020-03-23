import Head from "next/head";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";

const Typeahead = () => {
  const unfilteredOptions = [
    { firstName: "Joe", lastName: "Bob" },
    { firstName: "Jill", lastName: "Jackson" },
    { firstName: "Frank", lastName: "Sinatra" },
    { firstName: "Billy", lastName: "Jean" },
    { firstName: "Meryl", lastName: "Streep" },
    { firstName: "Bob", lastName: "Saget" },
    { firstName: "Zoe", lastName: "Deschanel" },
    { firstName: "Will", lastName: "Ferrell" },
    { firstName: "John", lastName: "Candy" }
  ];
  return (
    <Autocomplete
      id="free-solo-demo"
      freeSolo
      options={unfilteredOptions.map(
        option => `${option.firstName} ${option.lastName}`
      )}
      renderInput={params => (
        <TextField
          {...params}
          label="freeSolo"
          margin="normal"
          variant="outlined"
        />
      )}
    />
  );
};

const Home = () => (
  <div className="container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Typeahead />
  </div>
);

export default Home;
