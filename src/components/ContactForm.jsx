import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    emailjs
      .send(
        'service_vw0yvc5', 
        'template_8nt5v33', 
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
        '4sYZ5VaTUrRsIA7j5' 
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          reset(); 
        },
        (error) => {
          console.log('FAILED...', error);
        }
      );
  };

  return (
    <div className="bg-blue-500 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center text-white text-3xl font-bold mb-6">Request Free Consultancy</h2>
        
        <div className="flex justify-between">
          {/* Contact Info */}
          <div className="bg-white rounded-lg shadow-lg p-6 w-1/3">
            <h4 className="font-bold">Hotline 24/7</h4>
            <p className="text-2xl font-bold">(+23) 5535 68 68</p>
            <p><strong>Address:</strong> 2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
            <p><strong>Email:</strong> nevaeh.simmons@example.com</p>
            <p><strong>Fax:</strong> (702) 555-0122</p>
            <p><strong>Work Hour:</strong> Mon - Sat: 9:00 - 18:00</p>
          </div>
          
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white rounded-lg p-6 w-2/3 ml-4"
          >
            <div className="grid grid-cols-2 gap-4">
              <div>
                <input
                  className="w-full p-3 rounded-lg border"
                  placeholder="Name*"
                  {...register('name', { required: 'Name is required' })}
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
              </div>
              <div>
                <input
                  className="w-full p-3 rounded-lg border"
                  placeholder="Email Address*"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                      message: 'Invalid email address',
                    },
                  })}
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
              </div>
            </div>
            <div className="mt-4">
              <textarea
                className="w-full p-3 rounded-lg border"
                placeholder="How can we help you?"
                rows="3"
                {...register('message', { required: 'Message is required' })}
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
            </div>
            <div className="mt-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-600"
                  {...register('terms', { required: 'You must agree to the terms' })}
                />
                <span className="ml-2 text-sm text-gray-700">
                  By submitting, I’m agreed to the <a href="/terms" className="text-blue-500">Terms & Conditions</a>
                </span>
              </label>
              {errors.terms && <p className="text-red-500 text-sm">{errors.terms.message}</p>}
            </div>
            <button
              type="submit"
              className="mt-6 bg-blue-600 text-white py-3 px-6 rounded-lg w-full font-bold"
            >
              Request Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
