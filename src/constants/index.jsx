import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "#" },
  { label: "Neutroflow", href: "#" },
  { label: "Guidance", href: "#" },
  { label: "Testimonials", href: "#" },
];

export const testimonials = [
  {
    user: "Mahima Gavesh",
    company: "Age 32:",
    image: user1,
    text: "DiaMeals made managing my diabetes so much easier. The personalized meal plans are spot on for my needs.",
  },
  {
    user: "Rashmi Pramoda",
    company: "Age 45:",
    image: user2,
    text: "I love how DiaMeals tailors everything to my age and lifestyle. It’s a game-changer for my daily routine.",
  },
  {
    user: "Ishan Sharma",
    company: "Age 54:",
    image: user3,
    text: "This app really helped me understand which foods are best for me. My blood sugar is more stable than ever!",
  },
  {
    user: "Rohan Patel",
    company: "Age 28:",
    image: user4,
    text: "DiaMeals provides simple, practical advice. The meal suggestions are easy to follow and fit perfectly into my busy life.",
  },
  {
    user: "Michael Fernnado",
    company: "Age 50:",
    image: user5,
    text: "Using DiaMeals has improved my diet and overall health. The app’s guidance is clear and incredibly useful.",
  },
  {
    user: "Nisali Niketha",
    company: "Age 65:",
    image: user6,
    text: "I’ve been able to maintain better control over my diabetes with DiaMeals. The personalized insights are truly valuable.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Balance Your Plate",
    description:
      "Incorporate a variety of food groups—whole grains, lean proteins, and healthy fats for balanced meals.",
  },
  {
    icon: <Fingerprint />,
    text: "Portion Control Matters",
    description:
      "Smaller portions help maintain blood sugar levels. Practice mindful eating to avoid overeating.",
  },
  {
    icon: <ShieldHalf />,
    text: "Choose Low-Glycemic Foods",
    description:
      "Options for foods with a low glycemic index, like leafy greens and berries, to keep glucose levels steady.",
  },
  {
    icon: <BatteryCharging />,
    text: "Stay Hydrated",
    description:
      "Drink plenty of water throughout the day to support overall health and aid in digestion.",
  },
  {
    icon: <PlugZap />,
    text: "Limit Sugary Snacks",
    description:
      "Replace sugary snacks with healthier alternatives like nuts or fresh fruit to manage cravings.",
  },
  {
    icon: <GlobeLock />,
    text: "Consult Regularly",
    description:
      "Work with your healthcare provider to adjust your diet as needed for optimal diabetes management.",
  },
];

export const checklistItems = [
  {
    title: "Personalized Meal Plans",
    description:
      "Receive meal suggestions tailored to your age, gender, and health needs for optimal diabetes management.",
  },
  {
    title: "Nutritional Insights",
    description:
      "Access detailed information on the nutritional value of recommended foods to support your health goals.",
  },
  {
    title: "Health Tracking Made Easy",
    description:
      "Monitor your dietary choices and track progress effortlessly with our user-friendly tools.",
  },
  {
    title: "Stay Informed",
    description:
      "Get the latest tips and updates on diabetes management to keep your health on track.",
  },
];

export const pricingOptions = [
  {
    title: "Young Adults",
    price: "Age 20 - 40",
    features: [
      "Focus on balanced meals with lean proteins and whole grains.",
      "Incorporate regular physical activity to maintain energy levels.",
      "Monitor portion sizes to manage blood sugar effectively.",
    ],
  },
  {
    title: "Midlife Nutrition",
    price: "Age 40 - 50",
    features: [
      "Prioritize heart-healthy foods like fatty fish, nuts, and seeds.",
      "Include more fiber-rich vegetables to aid digestion.",
      "Stay hydrated and limit intake of sugary snacks.",
    ],
  },
  {
    title: "Golden Years",
    price: "Age 50 - 70",
    features: [
      "Choose foods that support bone health, like dairy or fortified alternatives.",
      "Opt for low-glycemic fruits to keep glucose levels steady.",
      "Maintain regular meal times to support metabolic health.",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Meal Planning Guide" },
  { href: "#", text: "Nutritional Tips" },
  { href: "#", text: "Health Insights" },
  { href: "#", text: "Support Center" },
];

export const platformLinks = [
  { href: "#", text: "Features Overview" },
  { href: "#", text: "Compatibility Information" },
  { href: "#", text: "User Requirements" },
  { href: "#", text: "App Downloads" },
  { href: "#", text: "Update History" },
];

export const communityLinks = [
  { href: "#", text: "Webinars" },
  { href: "#", text: "Support Groups" },
  { href: "#", text: "Health Workshops" },
  { href: "#", text: "Patient Stories" },
  { href: "#", text: "Volunteer Opportunities" },
];
