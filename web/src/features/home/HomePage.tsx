import Container from "@/components/layout/Container";

function HomePage() {
  return (
    <section className="py-20">
      <Container>
        <h1 className="text-5xl font-bold text-aepy-chocolate">
          Welcome to Aepy Bakery
        </h1>
        <p className="mt-4 text-aepy-chocolate">
          Pure goodness, baked with love.
        </p>
      </Container>
    </section>
  );
}

export default HomePage;
