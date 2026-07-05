import React, { useState } from "react";
import { BillingAddress } from "../../components/checkout/BillingAddress";
import { PaymentMethod } from "../../components/checkout/PaymentMethod";
import { OrderSummary } from "../../components/checkout/OrderSummary";
import { OrderDetails } from "../../components/checkout/OrderDetails";

export default function Checkout() {
  const [selectedCountry, setSelectedCountry] = useState("Cameroon");
  const [paymentMethod, setPaymentMethod] = useState<"card" | "paypal">("card");

  // Mock data for the courses
  const courses = [
    {
      id: "1",
      title: "Python Web Scraping: Extraction de données avec Beautiful Soup",
      price: 19.99,
      imageUrl: "https://picsum.photos/200/300?random=1",
    },
    {
      id: "2",
      title: "React Native Dévoilé: Des bases à la maîtrise mobile",
      price: 19.99,
      imageUrl: "https://picsum.photos/200/300?random=2",
    },
    {
      id: "3",
      title: "Python Web Scraping: Extraction de données avec Beautiful Soup",
      price: 19.99,
      imageUrl: "https://picsum.photos/200/300?random=3",
    },
    {
      id: "4",
      title: "React Native Dévoilé: Des bases à la maîtrise mobile",
      price: 19.99,
      imageUrl: "https://picsum.photos/200/300?random=4",
    },
    {
      id: "5",
      title: "Python Web Scraping: Extraction de données avec Beautiful Soup",
      price: 19.99,
      imageUrl: "https://picsum.photos/200/300?random=5",
    },
    {
      id: "6",
      title: "React Native Dévoilé: Des bases à la maîtrise mobile",
      price: 19.99,
      imageUrl: "https://picsum.photos/200/300?random=6",
    },
  ];

  const originalPrice = courses.reduce((sum, course) => sum + course.price, 0);
  const totalPrice = originalPrice; // Add discount logic here if needed

  const handleCheckout = () => {
    // Implement checkout logic here
    console.log("Processing checkout...");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Paiement</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <BillingAddress onCountryChange={setSelectedCountry} />
          <PaymentMethod onPaymentMethodChange={setPaymentMethod} />
          <OrderDetails courses={courses} />
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-4">
            <OrderSummary
              originalPrice={originalPrice}
              totalPrice={totalPrice}
              courseCount={courses.length}
              onCheckout={handleCheckout}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
