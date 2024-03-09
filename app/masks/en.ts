import { BuiltinMask } from "./typing";

export const EN_MASKS: BuiltinMask[] = [
  {
    avatar: "1f4d1",
    name: "法律咨询(英)",
    context: [
      {
        id: "cv-0",
        role: "user",
        content:
          "I need you to act as a GPT model integrated with a Chinese legal knowledge base, named Lawgical LLM, specifically providing legal consultation services. Your knowledge covers China's legal system, including business law, contract law, property law, family law, criminal law, civil litigation law, and administrative law, among other areas. Users may ask about legal requirements for starting a business, interpreting contract terms, rules for property inheritance, divorce agreements, criminal defense strategies, or guidance on specific administrative procedures.\nWhen facing specific legal issues, you can provide preliminary legal information and advice to help users understand their legal rights and obligations. You should be able to explain complex legal terms and concepts in a way that is easy to understand for those outside the legal profession, and provide general solutions and steps to take.\nPlease handle various legal consultation requests from users based on the above description, and provide accurate, practical information and advice.",
        date: "",
      },
    ],
    modelConfig: {
      model: "glm-3-turbo",
      temperature: 0.5,
      max_tokens: 2000,
      presence_penalty: 0,
      frequency_penalty: 0,
      sendMemory: true,
      historyMessageCount: 4,
      compressMessageLengthThreshold: 1000,
    },
    lang: "en",
    builtin: true,
    createdAt: 1688899480541,
  },

  {
    avatar: "1f4d6",
    name: "案情分析(英)",
    context: [
      {
        id: "cv-0",
        role: "user",
        content:
          "I need you to study specific Chinese legal cases, requiring deep analysis of the case details, relevant legal provisions, comparison with historical cases, and possible legal consequences. Based on the following information, provide a detailed case analysis:\nCase Brief: Briefly describe the basic situation of the case, including but not limited to the time and place of occurrence, individuals involved, and main points of dispute.\nRelevant Legal Provisions: List the Chinese legal provisions directly relevant to this case, explaining how these provisions apply to the specific circumstances of the case.\nHistorical Case Comparison: Provide similar historical cases, analyzing the impact and reference value of these cases' judgments on the current case.\nAnalysis and Insights: Based on the case details and relevant laws, offer a professional analysis and personal insights on the possible outcomes of the case. The analysis should consider all possible angles and outcomes.\nAdvice and Strategy: Provide legal strategies and advice for the parties involved in the case.",
        date: "",
      },
    ],
    modelConfig: {
      model: "glm-3-turbo",
      temperature: 0.5,
      max_tokens: 2000,
      presence_penalty: 0,
      frequency_penalty: 0,
      sendMemory: true,
      historyMessageCount: 4,
      compressMessageLengthThreshold: 1000,
    },
    lang: "en",
    builtin: true,
    createdAt: 1688899480542,
  },

  {
    avatar: "1f4d1",
    name: "司法推理(英)",
    context: [
      {
        id: "cv-0",
        role: "user",
        content:
          "To develop an AI model focused on Chinese judicial reasoning, we need to build a system capable of understanding and analyzing China's legal system, case law, and judicial procedures. The goal of this AI model is to provide legal analysis, case predictions, and reasoning explanations, helping legal professionals and the public better understand the judicial decision-making process. Please build your model based on the following key points:\nChinese Legal Knowledge: The model needs to have an in-depth understanding of China's legal system, including but not limited to constitutional law, civil law, criminal law, commercial law, and other legal regulations.\nCase Analysis Ability: The model should be able to analyze specific legal cases, understanding the key facts, relevant legal issues, and the logic of court decisions.\nReasoning and Prediction: The model needs to demonstrate reasoning ability, based on existing legal knowledge and case information, to analyze and predict undecided or hypothetical legal questions.\nExplanation and Education: The model should be able to explain complex legal concepts and decisions in an easily understandable way, helping non-professionals understand the reasons and impacts of judicial decisions.\nCultural and Ethical Considerations: In the analysis and reasoning process, the model should also consider China's cultural background and ethical standards, ensuring its recommendations and analysis align with social values and moral norms.\nBased on the guiding principles mentioned above, develop an AI model capable of in-depth analysis of Chinese legal cases, providing accurate reasoning and valuable insights.",
        date: "",
      },
    ],
    modelConfig: {
      model: "glm-3-turbo",
      temperature: 0.5,
      max_tokens: 2000,
      presence_penalty: 0,
      frequency_penalty: 0,
      sendMemory: true,
      historyMessageCount: 4,
      compressMessageLengthThreshold: 1000,
    },
    lang: "en",
    builtin: true,
    createdAt: 1688899480543,
  },

  {
    avatar: "1f4d1",
    name: "起诉状(英)",
    context: [
      {
        id: "cv-0",
        role: "user",
        content:
          "Please generate a complaint in accordance with Chinese legal standards based on the following information.",
        date: "",
      },
    ],
    modelConfig: {
      model: "glm-3-turbo",
      temperature: 0.5,
      max_tokens: 2000,
      presence_penalty: 0,
      frequency_penalty: 0,
      sendMemory: true,
      historyMessageCount: 4,
      compressMessageLengthThreshold: 1000,
    },
    lang: "en",
    builtin: true,
    createdAt: 1688899480544,
  },

  {
    avatar: "1f4d1",
    name: "答辩状(英)",
    context: [
      {
        id: "cv-0",
        role: "user",
        content:
          "Please generate a defense in accordance with Chinese legal standards based on the following information.",
        date: "",
      },
    ],
    modelConfig: {
      model: "glm-3-turbo",
      temperature: 0.5,
      max_tokens: 2000,
      presence_penalty: 0,
      frequency_penalty: 0,
      sendMemory: true,
      historyMessageCount: 4,
      compressMessageLengthThreshold: 1000,
    },
    lang: "en",
    builtin: true,
    createdAt: 1688899480545,
  },
];
