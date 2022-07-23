import React from "react";

function Contact() {
  const copyToClipboard = (str) => {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText)
      return navigator.clipboard.writeText("louayekazar@gmail.com");
    return Promise.reject("louayekazar@gmail.com");
  };
  return (
   <section id="contact" className="bg-indigo-600 pt-20">
      <div className="max-w-[1000px] mx-auto container">
        <div className=" grid md:grid-cols-2 gap-8 card p-4 md:p-8">
          <div className="flex flex-col justify-between h-full">
            <h2 className="text-4xl mb-4 h-full md:text-5xl">
              Have a project? <br />i would love to help.
            </h2>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center w-full p-2 rounded-md bg-slate-50 hover:bg-slate-100 hover:dark:bg-zinc-900 duration-300 dark:bg-zinc-700">
                <p>louayekazar@gmail.com</p>
                <button onClick={copyToClipboard}>
                  <i class="fa-solid fa-copy text-xl"></i>
                </button>
              </div>
            </div>
          </div>
          <div>
            <form
              className="grid gap-4"
              action="https://airform.io/louayekazar@gmail.com"
              method="post"
            >
              <label className="font-bold" htmlFor="">Your Name</label>
              <input type="text" name="Name" placeholder="Your Name" />
              <label className="font-bold" htmlFor="">Your E-mail</label>
              <input type="email" name="Emali" id="" placeholder="Your email" />
              <label className="font-bold" htmlFor="">Tell me more about your project</label>
              <textarea
                name="message"
                rows="3"
                placeholder="Tell me more about your project"
              ></textarea>
              <button className="bg-indigo-600 py-2 rounded-md hover:bg-indigo-700 duration-300 text-white">
                Send
              </button>
              <p className="text-center">Or</p>
              <a
                className="py-2 bg-sky-500 hover:bg-sky-^00 duration-300 text-center rounded-md text-white"
                href="https://t.me/mflxu"
                target="_blank"
              >
                Message me on Telegram{" "}
                <i class="fa-brands fa-telegram ml-2"></i>
              </a>
            </form>
          </div>
        </div>
      </div>
      
    </section>
  );
}

export default Contact;
