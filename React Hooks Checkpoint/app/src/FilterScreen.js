const FilterScreen = () => {
  return (
    <div>
      <h3>Sort by</h3>
      <form style={{ justifyContent: "space-between", gap: "30px" }} action="">
        <input type="radio" id="name" name="options" value="name" />
        <label htmlFor="option1">name</label>
        <br />
        <input type="radio" id="rating" name="options" value="rating" />
        <label htmlFor="option2"> rating</label>
      </form>
    </div>
  );
};
export default FilterScreen;
