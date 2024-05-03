import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import InputField from './InputField';
import AddressInputField from './AddressInputField';
 interface FormData {
  name: string;
  phone: string;
  email: string;
  area: string;
  city: string;
  state: string;
  postCode: string;
}


const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    area: '',
    city: '',
    state: '',
    postCode: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Autogenerate user ID
    const userId = Math.floor(Math.random() * 1000000);
    // Save data to local storage or RTK
    // Here, we'll use local storage
    localStorage.setItem(`user_${userId}`, JSON.stringify(formData));
    // Reset form data
    setFormData({
      name: '',
      phone: '',
      email: '',
      area: '',
      city: '',
      state: '',
      postCode: ''
    });
  };

  useEffect(() => {
    // Show confirmation pop-up if there are unsaved changes
    window.addEventListener('beforeunload', (e) => {
      if (Object.values(formData).some((value) => value !== '')) {
        e.preventDefault();
        e.returnValue = '';
      }
    });
  }, [formData]);

  return (
    <div className="flex items-center justify-center p-4 md:p-12">
      <div
        className="p-6 md:p-16 mx-auto w-full max-w-[500px] bg-white shadow-2xl rounded-lg"
        style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.6)' }}
      >
        <div className="mx-auto w-full max-w-[500px] bg-white">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <InputField
              label="Full Name"
              name="name"
              id="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
            />
            <InputField
              label="Phone Number"
              name="phone"
              id="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
            />
            <InputField
              label="Email Address"
              name="email"
              id="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
            <div className="mb-5 pt-3">
              <label className="block text-base font-medium text-blue-900">Address Details</label>
              <div className="-mx-3 flex flex-wrap">
                <AddressInputField
                  label="Enter area"
                  name="area"
                  id="area"
                  placeholder="Enter area"
                  value={formData.area}
                  onChange={handleChange}
                />
                <AddressInputField
                  label="Enter city"
                  name="city"
                  id="city"
                  placeholder="Enter city"
                  value={formData.city}
                  onChange={handleChange}
                />
                <AddressInputField
                  label="Enter state"
                  name="state"
                  id="state"
                  placeholder="Enter state"
                  value={formData.state}
                  onChange={handleChange}
                />
                <AddressInputField
                  label="Post Code"
                  name="postCode"
                  id="post-code"
                  placeholder="Post Code"
                  value={formData.postCode}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="hover:shadow-form w-full rounded-md bg-purple-600 py-3 px-8 text-center text-base font-semibold text-white outline-none"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
