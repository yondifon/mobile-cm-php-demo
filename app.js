const PhoneApp = () => {
  const [phone, setPhone] = React.useState("+237");
  const [response, setResponse] = React.useState(null);

  function checkNumber(e) {
    e.preventDefault();
    fetch(
      "/api.php?" +
        new URLSearchParams({
          phone_number: phone,
        })
    )
      .then((r) => r.json())
      .then((data) => {
        setResponse(data);
      });
  }

  return (
    <div className="max-w-3xl mx-auto p-16 flex flex-wrap space-x-5">
      <form onSubmit={checkNumber} className="mb-5">
        <a
          href="https://github.com/yondifon/mobile-cm-php"
          className="text-green-500"
        >
          View Package
        </a>
        <div className="my-3">
          <label className="text-2xl ">Mobile Operators Cameroon</label>
        </div>
        <Cleave
          className="border mb-5 outline-none py-2 px-4"
          autoComplete="tel"
          value={phone}
          options={{ phone: true, phoneRegionCode: "cm", prefix: "+237" }}
          onChange={(e) => setPhone(e.target.rawValue)}
        />
        <div>
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-1 rounded-lg"
          >
            Check
          </button>
        </div>
      </form>

      {response && (
        <div className="p-4 bg-gray-100">
          <pre>
            <code className="text-sm">{JSON.stringify(response, null, 2)}</code>
          </pre>
        </div>
      )}
    </div>
  );
};
ReactDOM.render(<PhoneApp />, document.getElementById("app"));
