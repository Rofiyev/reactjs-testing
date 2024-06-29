const Form = () => {
  return (
    <>
      <h1>Form</h1>
      <h3>Title</h3>
      <h3>Hello</h3>
      <span title="greeting">Assalomu Alaykum!</span>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <textarea name="bio" id="bio" />
        </div>
        <div>
          <label htmlFor="job-location">Job location</label>
          <select name="job-location" id="job-location">
            <option value="">Select country</option>
            <option value="UK">United Kingdom</option>
            <option value="US">United States</option>
            <option value="AU">Australia</option>
          </select>
        </div>
        <div>
          <label htmlFor="">
            <input type="checkbox" id="terms" /> I agree to the terms and
            conditions
          </label>
        </div>
        <button>Submit</button>
      </form>
    </>
  );
};

export default Form;
