// const input = document.getElementById("inputs");

// const output = document.getElementById("result");

// const getUser = async () => {
//   try {
//     const username = input.value;
//     const match = username.match(/with\s+(\w+)(?=\s+in|$)/);

//     const response = await fetch(
//       "https://api.groq.com/openai/v1/chat/completions",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           'Authorization':
//             "Bearer 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",
//         },
//         body:JSON.stringify({
//           model: "llama-3.3-70b-versatile",
//           messages: [
//             {
//                 role: "system",
//                 content: "You are an AI that generates only functional HTML and JavaScript code, which can be inserted into a <div id='result'></div>. Ensure all scripts execute properly."
//             },
//             {
//               role:"user",
//               content:input.value + `https://api.github.com/users/${}`
//             }
//           ]
//         })

//       }
//     );

//     const data = await response.json();
//   } catch (Error) {
//     console.log("Error", Error);
//   }
// };
