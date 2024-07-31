import React from "react";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <header className="bg-white text-black py-4">
        <div className="container mx-auto flex justify-around items-center">
          <div className="flex items-center justify-center space-x-2.5">
            <img
              src="https://img.freepik.com/premium-vector/chat-vector-icon_676179-133.jpg"
              alt="logo"
              className="w-[40px] h-[40px]"
            />
            <h1 className="text-xl font-bold">
              <span style={{ color: "indigo" }}>Talk</span> business
            </h1>
          </div>
          <nav className="flex items-center space-x-4">
            <Link className="hover:text-gray-500 transition-colors" href={"/"}>
              home
            </Link>
            <Link className="hover:text-gray-500 transition-colors" href={"/about"}>
              about
            </Link>
            <button className="btn btn-outline btn-secondary">Contact us</button>
          </nav>
        </div>
      </header>
      <main className="flex flex-col gap-4">
        <div className="flex items-center justify-center">
          <h1 className="my-16 text-4xl w-[500px] h-[50px]">
            Agile focused business services and more.
          </h1>
        </div>
        <div className="flex flex-col gap-4">
          <p style={{paddingInline:"20rem"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, quae officiis autem numquam cumque provident ipsa? At, illo autem repudiandae aut eum ipsam voluptatum magnam eos dolorem quam, soluta eius vitae sunt placeat, quod ab quis nesciunt nostrum eaque nihil quas cumque aliquam. Quaerat, eligendi facilis, reiciendis quae qui nemo, consequuntur voluptas nobis aliquam cupiditate molestias corporis suscipit ipsum dolores itaque? Possimus minima vel aperiam maxime natus cupiditate magni, aut praesentium voluptas alias quaerat nemo asperiores molestias! Deserunt recusandae dicta rem harum, quod reiciendis mollitia asperiores fugit animi blanditiis? Qui iure vero pariatur quaerat expedita nemo nam autem repellat impedit!</p>
          <img className="w-full" src="https://img.freepik.com/free-photo/female-hand-typing-keyboard-laptop_1150-15742.jpg" alt="working on computer" />
          <p style={{paddingInline:"20rem",marginBlock:"1rem"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod quia veritatis voluptates modi amet ducimus iusto nulla repellat eius veniam sapiente optio necessitatibus aut deserunt, dolor delectus laborum. Itaque, a accusamus. Aspernatur tempora dolor veritatis, perspiciatis suscipit nulla iure aliquam. Assumenda debitis dolores deserunt ullam commodi inventore nesciunt provident eligendi. Itaque ratione beatae modi nostrum dolores similique placeat eligendi voluptas odio voluptatem numquam dolorem magnam sunt rerum quam nemo hic a officiis, quidem vitae asperiores cum odit aliquam laborum. Laudantium enim dolore quidem sunt dicta quo corrupti, quaerat voluptatibus quis amet reiciendis repellat mollitia rem repudiandae. Dolor voluptatem et porro?</p>
        </div>
      </main>
      <footer className="footer bg-base-200 text-base-content p-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <footer style={{backgroundColor:"grey"}} className="footer bg-base-200 text-base-content border-base-300 border-t px-10 py-4">
        <aside className="grid-flow-col items-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current"
          >
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
          </svg>
          <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
}
