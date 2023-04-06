import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [author, setAuthor] = useState<string>("");
  const [bookName, setBookName] = useState<string>("");
  const [question, setQuestion] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [output, setOutput] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/api/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          author,
          bookName,
          question,
        }),
      });
      const data = await response.json();
      setOutput(data.result);
    } catch (error) {
      console.error(error);
      setOutput("Error fetching data");
    }
    setLoading(false);
  };
  return (
    <>
      <Head>
        <title>Ask My Books</title>
        <meta name="description" content="Get answers from your book" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className="flex justify-center h-screen">
        <div className="flex-1 h-full bg-gray-100 p-4">
          <form onSubmit={handleSubmit} className="ml-[2rem] mt-[2rem]">
            <h1 className="text-5xl text-gray-800 font-bold mb-4">
              Ask My Book
            </h1>
            <label
              className="block text-gray-800 text-2xl mt-10 font-bold mb-2"
              htmlFor="author"
            >
              Book Author
            </label>
            <input
              className="border mt-5 rounded py-4 px-5 text-gray-700 text-2xl  mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="author"
              type="text"
              placeholder="Enter author name"
              value={author}
              onChange={(event) => setAuthor(event.target.value)}
              required
            />
            <label
              className="block text-gray-800 text-2xl mt-10  font-bold mb-2"
              htmlFor="bookName"
            >
              Book Name
            </label>
            <input
              className="border mt-5 rounded py-4 px-5 text-gray-700 text-2xl mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="bookName"
              type="text"
              placeholder="Enter book name"
              value={bookName}
              onChange={(event) => setBookName(event.target.value)}
              required
            />
            <label
              className="block text-gray-800 text-2xl mt-10  font-bold mb-2"
              htmlFor="question"
            >
              Question
            </label>
            <input
              className="border mt-5 rounded py-4 px-5 text-gray-700 text-2xl mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="question"
              type="text"
              placeholder="Enter question"
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              required
            />
            <br />
            <button
              className="bg-gray-800 mt-10 text-2xl hover:bg-gray-900 text-white font-semibold py-3 px-8 border border-gray-800 rounded shadow"
              type="submit"
              disabled={loading}
            >
              {loading ? "Loading..." : "Submit"}
            </button>
          </form>
        </div>
        <div className="flex-1 h-full bg-gray-800 p-4 text-white">
          {output ? (
            <div>
              <h2 className="text-white font-bold text-2xl mb-4">Answer:</h2>
              <p className="text-white font-medium text-lg">{output}</p>
            </div>
          ) : (
            <div className="flex justify-center items-center h-full">
              <Image
                src="/book-icon.png"
                alt="book icon"
                width={150}
                height={150}
              />
            </div>
          )}
        </div>
      </main>
    </>
  );
}
