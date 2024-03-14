import React from 'react';
import './HomePage.css'; // Asegúrate de crear este archivo CSS
import '../Components/HeaderContent';

const ContactPage = () => {
 return (  
  <div class="flex h-[940px] items-center justify-start bg-white">
    <div class="mx-auto w-full max-w-lg bg-[#9bc1f2] text-white p-10 rounded-xl">
      <h1 class="text-4xl font-medium">Contactanos</h1>
      <p class="mt-3">Escribe un correo a <a href="mailto:contacto@helloheath.com" class="underline text-[#3E8AED]">contacto@helloheath.com</a> o escribenos aquí:</p>
  
      <form class="mt-10">
        <div class="grid gap-6 sm:grid-cols-2">
          <div class="relative z-0">
            <input type="text" name="name" class="peer block w-full appearance-none border-0 border-b border-white bg-transparent py-2.5 px-0 text-sm text-white focus:border-gray-300 focus:outline-none focus:ring-0" placeholder=" " />
            <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-white duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-gray-300">Your name</label>
          </div>
          <div class="relative z-0">
            <input type="text" name="email" class="peer block w-full appearance-none border-0 border-b border-white bg-transparent py-2.5 px-0 text-sm text-white focus:border-gray-300 focus:outline-none focus:ring-0" placeholder=" " />
            <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-white duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-gray-300 ">Your email</label>
          </div>
          <div class="relative z-0 col-span-2">
            <textarea name="message" rows="5" class="peer block w-full appearance-none border-0 border-b border-white bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-gray-300 focus:outline-none focus:ring-0" placeholder=" "></textarea>
            <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-white duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-gray-300">Your message</label>
          </div>
        </div>
        <button type="submit" class="mt-5 rounded-md bg-black px-10 py-2 text-white">Send Message</button>
      </form>
    </div>
  </div>
 );
}

export default ContactPage;