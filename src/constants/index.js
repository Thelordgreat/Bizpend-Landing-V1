import img1 from "../assets/img1.png"
import img2 from "../assets/img2.png"
import img3 from "../assets/img3.png"
import img4 from "../assets/img4.png"
import img5 from "../assets/img5.png"
import img6 from "../assets/img6.png"
import img7 from "../assets/img7.png"
import img8 from "../assets/img8.png"
import img9 from "../assets/img9.png"
import Avatar1 from "../assets/Avatar1.png"
import Avatar2 from "../assets/Avatar2.png"
import Avatar3 from "../assets/Avatar3.png"


export const Feature = [
    {
        id: "1",
        image: img1,
        title: "Corporate Card Issuing",
        text: "Issue physical and virtual corporate cards to employees with ease, providing a secure and trackable payment method.",
        bgColor: "#E7F5FF"
    },
    {
        id: "2",
        image: img2,
        title: "Expense Management",
        text: "Automatically categorize and track expenses in real-time, reducing manual work and human error while providing actionable insights.",
        bgColor: "#E7F5FF"
    },
    {
        id: "3",
        image: img3,
        title: "Invoicing, Payments, and Reconciliation",
        text: "Streamline invoicing and payments through a centralized system, with automated reconciliation to ensure accurate and timely financial reporting",
        bgColor: "#E7F5FF"
    },
    {
        id: "4",
        image: img4,
        title: "Receipt Uploading and Management",
        text: "Enable employees to upload receipts digitally, simplifying the expense tracking and reimbursement process.",
        bgColor: "#EBFEDA"
    },
    {
        id: "5",
        image: img5,
        title: "Approvals",
        text: "Establish custom approval workflows for expense submissions, ensuring compliance with company policies and preventing unauthorized spending.",
        bgColor: "#EBFEDA"
    },
    {
        id: "6",
        image: img6,
        title: "Budgets",
        text: "Create and manage departmental and project-based budgets, offering insights into spending patterns and allowing for proactive financial decision-making",
        bgColor: "#EBFEDA"
    },
    {
        id: "7",
        image: img7,
        title: "Limits for Cards",
        text: "Set and adjust spending limits for individual corporate cards, mitigating risk and ensuring adherence to budget constraints.",
        bgColor: "#E6DAF9"
    },
    {
        id: "8",
        image: img8,
        title: "Card Monitoring",
        text: "Monitor card usage in real-time, identifying suspicious activity and safeguarding against fraud.",
        bgColor: "#E6DAF9"
    },
    {
        id: "9",
        image: img9,
        title: "Integrations",
        text: "Seamlessly integrate with popular accounting, HR, and project management software, streamlining financial data flow and enhancing overall efficiency.",
        bgColor: "#E6DAF9"
    },
]

export const Reviews = [
    {
        id: "1",
        review: "I have been using Bizpend for several months now and I am thrilled with the results. It has made managing my invoices so much easier and streamlined, and I love being able to issue virtual cards to my clients.",

        client : {
            image : Avatar1 ,
            clientName: "Esther Howard",
            role: "Digital Marketer, Apple"
        }
    },
    {
        id: "2",
        review: "Bizpend has truly transformed my business operations by allowing me to manage my invoices, issue virtual cards and keep track of my clients all in one place. I can't imagine running my business without it now.",

        client : {
            image : Avatar2 ,
            clientName: "Ralph Edwards",
            role: "Sales Executive, Amazon"
        }
    },
    {
        id: "3",
        review: "The client management feature on Bizpend is so useful for keeping track of my customers and their payments. I would highly recommend this app to any business owner who wants to take their financial management to the next level.",

        client : {
            image : Avatar3 ,
            clientName: "Savannah Nguyen",
            role: "Chief Financial Officer, Meta"
        }
    },
]

export const FAQ = [
    {
        id: "1",
        question: "What is Bizpend?",
        text:"Bizpend is an innovative corporate card issuing and expense management solution designed to streamline financial operations for businesses. It offers features such as corporate card management, expense management, invoice payments, approvals, budgets, limits and spend controls, and integrations with popular accounting and ERP software."
    },
    {
        id: "2",
        question: "How can Bizpend benefit my business?",
        text:"Bizpend helps businesses efficiently manage their expenses, monitor budgets, and maintain control over corporate card usage. Our platform simplifies the expense management process, saves time, and offers valuable insights to improve financial decision-making."
    },
    {
        id: "3",
        question: "Is Bizpend secure?",
        text:"Yes, security is a top priority for Bizpend. We work with leading banking-as-a-service providers and use advanced encryption methods to ensure the safety of your financial data. Additionally, we implement rigorous fraud detection and prevention mechanisms to protect your transactions."
    },
    {
        id: "4",
        question: "Can I set spending limits and controls with Bizpend?",
        text:"Yes, our platform allows you to set and manage spending limits and controls on individual cards or accounts. This helps businesses maintain budgetary control and prevent unauthorized or excessive spending."
    },
    {
        id: "5",
        question: "Does Bizpend support invoice payments?",
        text:"Yes, our platform facilitates invoice payments by allowing you to create virtual cards or accounts specifically for this purpose. These accounts/cards can be easily linked to specific invoices, simplifying the payment process."
    },
    {
        id: "6",
        question: "Can Bizpend integrate with my existing accounting or ERP software?",
        text:"Yes, we offer integration with popular accounting and ERP software. Our platform can also be easily integrated with other third-party tools and services through APIs or webhooks."
    },
    {
        id: "7",
        question: "What kind of customer support does Bizpend provide?",
        text:"We offer dedicated customer support through various channels, such as phone, email, and live chat. Our team is committed to addressing your questions and concerns in a timely and efficient manner."
    },
    {
        id: "8",
        question: "How much does Bizpend cost?",
        text:"Please visit our pricing page at https://bizpend.com for detailed information on our pricing models and fee structures. We strive to offer competitive and transparent pricing to suit the needs of businesses of all sizes."
    },
    {
        id: "9",
        question: "How do I get started with Bizpend?",
        text:"To get started with Bizpend, simply sign up for an account on our website https://bizpend.com, and our team will guide you through the onboarding process."
    },
    {
        id: "10",
        question: "Is Bizpend compliant with relevant laws and regulations?",
        text:"Yes, we ensure that our platform remains compliant with all relevant laws and regulations in the jurisdictions where we operate. We continually monitor regulatory changes and update our platform accordingly to maintain compliance."
    },
]

export const PricingDetails = [
    {
        id: "1",
        type: "Basic",
        amount: "$29",
        detail: "The perfect plan for individuals and small businesses",
        feature1: "Timely customer support",
        feature2: "Up to 20GB available runtime capacity",
        feature3: "Basic reporting and analytics",
        feature4: "200+ integrations",
        bgColor: "#ffffff",
        colorCode: "#000000",
        btnBg: "#454ADE",
        btnColor: "#ffffff",
        link: "/",
    },
    {
        id: "2",
        type: "Teams",
        amount: "$52",
        detail: "The perfect plan for either small or large scale teams",
        feature1: "Timely customer support",
        feature2: "Up to 20GB available runtime capacity",
        feature3: "Basic reporting and analytics",
        feature4: "200+ integrations",
        bgColor: "#1E2338",
        colorCode: "#ffffff",
        btnBg: "#ffffff",
        btnColor: "#454ADE",
        link: "/",
        popularity: "POPULAR"
    },
    {
        id: "3",
        type: "Enterprise",
        amount: "$134",
        detail: "The perfect plan for large corps",
        feature1: "Timely customer support",
        feature2: "Up to 20GB available runtime capacity",
        feature3: "Basic reporting and analytics",
        feature4: "200+ integrations",
        bgColor: "#ffffff",
        colorCode: "#000000",
        btnBg: "#454ADE",
        btnColor: "#ffffff",
        link: "/"
    },
]

export const NavItems = [
    {
        id: "1",
        title: "Features",
        link: "/"
    },
    {
        id: "2",
        title: "FAQs",
        link: "/"
    },
    {
        id: "3",
        title: "Pricing",
        link: "/"
    },
    {
        id: "4",
        title: "Contact Us",
        link: "/"
    },
]