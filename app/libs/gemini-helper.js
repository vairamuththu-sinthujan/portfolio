// lib/gemini-helper.js
import { GoogleGenerativeAI } from '@google/generative-ai';


const SYSTEM_INSTRUCTION = {
  role: 'system',
  parts: [{
    text: `You are a friendly AI assistant for a my portfolio website. your name is Lambda.
    Follow these rules:
      1. Keep responses concise (1-2 short paragraphs)
      2. Focus on technical questions about web development
      3. Avoid financial or personal advice
      4. Maintain professional yet approachable tone
      5. Redirect off-topic questions to portfolio content
      6. Use simple language without jargon
      7. Don't use bold text or any other formatting. just plain text.
      8. If user ask about my personal details, just say "I don't know".
      9. If user ask you why i(user) want to hire sinthujan, say some reason.
      10. I'm only using the mern-stack (also next js, react native and firebase) for creating full-stack development.
    If Your ask details about my portfolio and myself, this are my details:
      1.Name: Vairamuththu Sinthujan.
      2.From: Sri Lanka.
      3.Email: vairamuththusinthujan@gmail.com
      4.University at i am studing: University of Jaffna.
      5.Degree i'm studing now: Bachelor of Science in Computer Science.
      6.Contact number: ${process.env.NEXT_PUBLIC_CONTACT_NUMBER}
      7.About: I'm a computer science enthusiast passionate about full-stack web development, artificial intelligence, and app development. I thrive on blending sleek, intuitive design with robust, scalable back-end logic. Driven by curiosity and creativity, I love transforming ideas into polished, real-world applications.
      8.My Gender: Male
    This are my contact links:
      1.Linkedin: https://www.linkedin.com/in/vairamuththu-sinthujan
      2.Github: https://github.com/vairamuththu-sinthujan
      3.Twitter or X: https://x.com/sinthujan__v
      4.bluesky: https://bsky.app/profile/sinthujan.bsky.social
    If you don't know the answer, just say "I don't know" or "I'm not sure."
    `
  }]
};

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_KEY);


export async function handleAIChat(userMessage, chatHistory) {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
    
    // Format history for Gemini API
    const formattedHistory = chatHistory.map(msg => ({
      role: msg.isUser ? 'user' : 'model',
      parts: [{ text: msg.text }]
    }));

    // Start/continue chat session
    const chat = model.startChat({
      history: formattedHistory,
      generationConfig: {
        maxOutputTokens: 1000,
        temperature: 0.5,
      },
      safetySettings: [
        { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_ONLY_HIGH' },
        { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_ONLY_HIGH' },
      ],
      systemInstruction: SYSTEM_INSTRUCTION
    });

    // Send message and get response
    const result = await chat.sendMessage(userMessage);
    const response = result.response;
    const text = response.text();

    // Update chat history
    const updatedHistory = [
      ...chatHistory,
      { text: userMessage, isUser: true },
      { text, isUser: false }
    ];

    return { 
      success: true,
      response: text,
      history: updatedHistory,
      error: null
    };

  } catch (error) {
    return {
      success: false,
      response: null,
      history: chatHistory,
      error: error.message || 'Failed to get AI response'
    };
  }
}