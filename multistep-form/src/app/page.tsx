"use client";

import { useState } from "react";
import { loadData } from "@/utils/Methods";

const HomePage = () => {
    const [formData, setFormData] = useState(loadData());
    return <div>Multistep Form</div>;
}

export default HomePage;
