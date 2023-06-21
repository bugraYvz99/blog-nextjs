"use client"
import { useState } from 'react';

type LoginFormValues = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const [formValues, setFormValues] = useState<LoginFormValues>({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Login işlemleri
    console.log(formValues);
    // Diğer login işlemlerini burada gerçekleştirebilirsiniz
  };

  return (
    <div className="flex flex-col relative top-16 items-center justify-center h-[45%]">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            className="mt-1 px-4 py-2 border-b-[2px] border-gray-300 focus:border-b-[2px] border-gray-300 transition duration-300 rounded-md w-full focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
            className="mt-1 px-4 py-2 border-b-[2px] border-gray-300 focus:border-b-[2px] border-gray-300 transition duration-300 rounded-md w-full focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  );
}
