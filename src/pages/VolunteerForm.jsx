import React from 'react';
import { toast } from 'react-toastify';

function VolunteerForm() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Submitting...");
    const formData = new FormData(event.target);

    formData.append("access_key", "b2ce0886-feb9-4119-8004-ca43b66e2823");

    // Include a custom message for the email body
    const volunteerName = formData.get("Name");
    const volunteerMessage = formData.get("Message");
    const customizedMessage = `Dear Team, \n\nYou have received a new volunteer application. \n\nVolunteer Details:\nName: ${volunteerName}\nMessage: ${volunteerMessage}\n\nThank you.`;

    formData.append("message", customizedMessage);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Volunteer Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult("");
    }
  };

  return (
    <div className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-6">
        Volunteer <span className="underline underline-offset-8 decoration-blue-600 font-light">Registration</span>
      </h1>
      <p className="text-gray-600 max-w-80 text-center mb-8 mx-auto">
        Join us as a volunteer and make a difference!
      </p>

      <form
        onSubmit={onSubmit}
        action=""
        className="max-w-2xl mx-auto text-gray-600 pt-8"
      >
        {/* Name */}
        <div className="flex flex-wrap mb-6">
          <div className="w-full md:w-1/2 text-left">
            Your Name
            <input
              className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              name="Name"
              placeholder="Your Name"
              required
            />
          </div>

          {/* Email */}
          <div className="w-full md:w-1/2 text-left md:pl-4">
            Your Email
            <input
              className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              name="Email"
              placeholder="Your Email"
              required
            />
          </div>
        </div>

        {/* Phone Number */}
        <div className="mb-6 text-left">
          Phone Number
          <input
            className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="tel"
            name="Phone"
            placeholder="Your Phone Number"
            required
          />
        </div>

        {/* Age */}
        <div className="mb-6 text-left">
          Age
          <input
            className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="number"
            name="Age"
            placeholder="Your Age"
            required
          />
        </div>

        {/* Address */}
        <div className="mb-6 text-left">
          Address
          <textarea
            className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="Address"
            placeholder="Your Address"
            required
          ></textarea>
        </div>

        {/* Availability */}
        <div className="mb-6 text-left">
          Availability
          <select
            className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="Availability"
            required
          >
            <option value="" disabled selected>
              Select Availability
            </option>
            <option value="Weekdays">Weekdays</option>
            <option value="Weekends">Weekends</option>
            <option value="Both">Both</option>
          </select>
        </div>

        {/* Volunteer Message */}
        <div className="mb-6 text-left">
          Why do you want to volunteer?
          <textarea
            className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="Message"
            placeholder="Your Message"
            required
          ></textarea>
        </div>

        <button className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white py-3 rounded-lg font-semibold hover:from-blue-500 hover:to-blue-300 transition">
          {result ? result : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default VolunteerForm;
