import Column from "../components/Column/Column";

const Todos = () => {
  return (
    <>
      <Column state="PLANNED" />
      <Column state="ONGOING" />
      <Column state="DONE" />
    </>
  );
};

export default Todos;
