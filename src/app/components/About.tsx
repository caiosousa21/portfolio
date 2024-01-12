import React from "react";

function About() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-5 px-20 pt-40">
      <div className="col-span-3">
        <h1 className="mb-4 text-4xl lg:text-6xl font-extrabold">
          Hello, I'm Caio
        </h1>
        <p className="text-lg lg:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          hendrerit mattis nunc vitae lobortis. Integer pellentesque nisl sit
          amet fringilla efficitur. Donec volutpat, leo quis pharetra vulputate,
          ex augue scelerisque odio, vitae bibendum est magna ac nisi. Morbi
          malesuada velit eu congue facilisis. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum
          quis elit ligula. Praesent hendrerit nisi non urna tempor tincidunt.
        </p>
      </div>
    </section>
  );
}

export default About;
