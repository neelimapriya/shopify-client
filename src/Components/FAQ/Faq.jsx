const Faq = () => {
  return (
    <div className="max-w-5xl mx-auto mt-10 mb-5">
        <h2 className="text-center font-serif text-2xl">CLIENT SERVICES</h2>
      <div className="join join-vertical w-full">
        <div className="collapse collapse-arrow join-item border border-sky-900">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium font-serif">
            HOW CAN I CREATE AN ACCOUNT?
          </div>
          <div className="collapse-content">
            <p className="font-serif">
              You can create your account by clicking on the Login Button
              located in the menu at the top of our home page (on the right
              side). Then click on Login and fill in the obligatory information.
              After Creating your account you can see your photo and name in the
              top of the home page.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-sky-900 ">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium font-serif">
            WHAT ARE THE ADVANTAGES OF CREATING AN ACCOUNT?
          </div>
          <div className="collapse-content">
            <p className=" font-serif">
              Creating an account enables you to track the Add Product and Product details page of your SHOPIFY
              purchases and helps you to consult your order history. You can
              also update your Product information. For your
              security, Shopify does not save your credit card information and
              will not share your personal data with any third parties
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-sky-900">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium font-serif">
          HOW CAN I LOGOUT MY ACCOUNT?
          </div>
          <div className="collapse-content">
            <p className="font-serif">You can easily Logout your Account by clicking on the Logout located in the menu at the top of our home page</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
