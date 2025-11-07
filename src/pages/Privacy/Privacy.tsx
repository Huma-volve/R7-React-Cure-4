
export default function Privacy() {
    return (
        <section className=" bg-white text-[#50565B] py-15 font-sans ">
            <div className="container">
                {/* Header */}

                <header className="flex items-center justify-center relative mb-10">
                    <button
                        onClick={() => window.history.back()}
                        className="absolute left-0 text-[#2A2438] text-2xl hover:opacity-70 transition"
                        aria-label="Go back"
                    >
                        ←
                    </button>
                    <h1 className="text-2xl md:text-3xl font-serif text-[#2A2438]">
                        Privacy Policy
                    </h1>
                </header>

                {/* Last Updated */}
                <section className="mb-6">
                    <p className="text-lg font-semibold text-[#2A2438]">
                        Last Updated:{" "}
                        <span className="text-gray-400 font-normal">19/11/2024</span>
                    </p>
                </section>

                {/* Introduction */}
                <section className="mb-10">
                    <p className="leading-relaxed text-[15px] md:text-[16px]">
                        Welcome to Cure. Your privacy is important to us. This Privacy Policy
                        explains how we collect, use, and protect your personal information
                        when you use our doctor appointment booking app.
                    </p>
                </section>

                {/* Terms & Conditions */}
                <section>
                    <h2 className="text-xl md:text-2xl font-serif text-[#2A2438] mb-4 capitalize">
                        terms & conditions
                    </h2>

                    <p className="leading-relaxed text-[15px] md:text-[16px] mb-6">
                        By registering, accessing, or using this app, you confirm that you are
                        at least 18 years old (or have parental/guardian consent if younger)
                        and agree to be bound by these Terms and our Privacy Policy.
                    </p>

                    <div className="mb-6">
                        <p className="mb-2 font-semibold text-[#2A2438]">You agree to:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Use the app only for lawful purposes.</li>
                            <li>
                                Provide accurate and complete information during registration and
                                booking.
                            </li>
                            <li>Not impersonate others or create fake accounts.</li>
                        </ul>
                    </div>

                    <div className="mb-6">
                        <p className="mb-2 font-semibold text-[#2A2438]">You may not:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Disrupt or interfere with the app’s functionality.</li>
                            <li>Try to access data or systems not meant for you.</li>
                            <li>Use the app to harass or abuse doctors or staff.</li>
                        </ul>
                    </div>

                    <p className="leading-relaxed text-[15px] md:text-[16px]">
                        Your data is handled in accordance with our{" "}
                        <span className="text-[#2A2438] font-semibold underline cursor-pointer">
                            Privacy Policy
                        </span>
                        . You are responsible for keeping your login credentials secure.
                    </p>
                </section>
            </div>

        </section>
    )
}
