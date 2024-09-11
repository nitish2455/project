import React, { useState } from "react";
import Confetti from "react-confetti";

const DeployComponent = () => {
  const [formData, setFormData] = useState({
    commands: "",
    port: "",
    arguments: "",
    envVariables: "",
    pricing: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedPricing, setSelectedPricing] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePricingSelection = (pricing) => {
    setSelectedPricing(pricing);
    setFormData({ ...formData, pricing });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { commands, port, arguements, envVariables, pricing } = formData;

    if (commands && port && arguments && envVariables && pricing) {
      setIsSubmitted(true);
    } else {
      alert("All fields are required!");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#0C1015] max-w-full">
      {isSubmitted && <Confetti />}
      <div className="border p-8 rounded-md shadow-md ">
        <h1 className="text-2xl font-bold mb-4">Configure Deployment (optional)</h1>
        <p className="mb-6">Please fill out the required fields and select a pricing configuration.</p>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Commands</label>
            <input
              type="text"
              placeholder="My-deployment"
              name="commands"
              className="border w-full p-2 rounded bg-[#0D1014]"
              value={formData.commands}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Port</label>
            <input
              type="text"
              placeholder="8000"
              name="port"
              className="border w-full p-2 rounded bg-[#0D1014]"
              value={formData.port}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Arguments</label>
            <input
              type="text"
              placeholder="My-deployment"
              name="arguments"
              className="border w-full p-2 rounded bg-[#0D1014]"
              value={formData.arguments}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 ">Environment Variables</label>
            <input
              type="text"
              placeholder="ENV_NAME=ENV_VALUE"
              name="envVariables"
              className="border w-full p-2 rounded bg-[#0D1014]"
              value={formData.envVariables}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Pricing Configuration</label>
            <div className="flex justify-between gap-3">
  {[
    { name: "Micro", ram: "1 GB RAM", vcpu: "1 vCPU", textColor: "#962D00" },
    { name: "Small", ram: "2 GB RAM", vcpu: "2 vCPU", textColor: "#853BCE" },
    { name: "Large", ram: "4 GB RAM", vcpu: "4 vCPU", textColor: "#1A73E8" },
  ].map((pricing) => (
    <div
      key={pricing.name}
      className={`p-4 w-1/3 text-center border cursor-pointer rounded-md ${
        selectedPricing === pricing.name ? "border-[#1A73E8]" : "border-gray-300"
      }`}
      onClick={() => handlePricingSelection(pricing.name)}
      style={{ backgroundColor: "#0C1015" }} 
    >
      <h3 className="font-bold mb-2" style={{ backgroundColor: pricing.textColor, color: "white", padding: "4px 8px", borderRadius: "4px" }}>
        {pricing.name}
      </h3>
      <p className="text-sm text-white">{pricing.ram}</p>
      <p className="text-sm text-white">{pricing.vcpu}</p>
    </div>
  ))}
</div>

</div>

          <button
            type="submit"
            className=" text-white w-full p-3 rounded-md"
            style={{
              background:
                "linear-gradient(90deg, rgba(26, 115, 232, 0.05) 0%, rgba(240, 40, 73, 0.05) 54%, rgba(133, 59, 206, 0.05) 98.5%)",
              border: "1px solid #1A73E8", 
            }}
          >
            Deploy
          </button>
        </form>
      </div>

      {isSubmitted && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-md text-center">
            <h2 className="text-2xl font-bold mb-4 text-black">Successfully Deployed!</h2>
            <p className="text-black">Your configuration has been successfully deployed.</p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="mt-4 bg-green-500 text-white p-2 rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeployComponent;
