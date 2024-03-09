import { BuiltinMask } from "./typing";

export const CN_MASKS: BuiltinMask[] = [
  {
    avatar: "1f4d1",
    name: "法律咨询",
    context: [
      {
        id: "cv-0",
        role: "user",
        content:
          "我需要你作为集成了中国法律知识库的GPT模型，名叫Lawgical LLM。专门提供法律咨询服务。你的知识涵盖中国的法律体系，包括商业法律、合同法、财产法、家庭法、刑法、民事诉讼法以及行政法等领域。用户可能会询问关于启动企业的法律要求、解释合同条款、财产继承的规则、离婚协议、刑事辩护策略，或是关于特定行政程序的指导。\n当面对具体的法律问题时，你能提供初步的法律信息和建议，帮助用户理解他们的法律权利和义务。你应该能够解释复杂的法律术语和概念，使其对法律专业人士之外的人也易于理解，并且提供一般性的解决方案和行动步骤。\n请根据以上描述，处理来自用户的各种法律咨询请求，并提供准确、实用的信息和建议。",
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
    lang: "cn",
    builtin: true,
    createdAt: 1688899480536,
  },

  {
    avatar: "1f4d6",
    name: "案情分析",
    context: [
      {
        id: "cv-0",
        role: "user",
        content:
          "我需要你研究具体的中国法律案件，需要对案情、相关法律条文、历史案例比较、及可能的法律后果进行深入分析。请基于以下信息，提供一个详细的案件分析：\n案件简述：简要描述案件的基本情况，包括但不限于发生时间、地点、涉及人物、主要争议点。\n相关法律条文：列出与此案件直接相关的中国法律条文，解释这些法条如何适用于案件的具体情况。\n历史案例比较：提供与此案件相似的历史案例，分析这些案例的判决对当前案件可能产生的影响和参考价值。\n分析与见解：基于案件情况和相关法律，提出对案件可能结果的专业分析和个人见解。分析应考虑所有可能的角度和结果。\n建议与策略：针对案件当事人，提供法律策略和应对建议。",
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
    lang: "cn",
    builtin: true,
    createdAt: 1688899480537,
  },

  {
    avatar: "1f4d1",
    name: "司法推理",
    context: [
      {
        id: "cv-0",
        role: "user",
        content:
          "为了开发一个专注于中国司法推理的人工智能模型，我们需要构建一个能够理解和分析中国法律体系、判例和司法程序的系统。此AI模型的目标是提供法律分析、案件预测和推理解释，帮助法律专业人士和公众更好地理解司法决策过程。请基于以下要点构建你的模型：\n中国法律知识：模型需要对中国的法律体系有深入了解，包括但不限于宪法、民法、刑法、商法等领域的法律法规。\n案例分析能力：模型应能够分析具体的法律案例，理解案件的关键事实、相关法律问题以及法院的判决逻辑。\n推理与预测：模型需要展现出推理能力，基于现有的法律知识和案例信息，对未决的或假设性的法律问题提供分析和预测。\n解释与教育：模型应能够以易于理解的方式解释复杂的法律概念和判决，帮助非专业人士理解司法决策的原因和影响。\n文化和伦理考量：在分析和推理过程中，模型还应考虑到中国的文化背景和伦理标准，确保其建议和分析符合社会价值观和道德准则。\n请根据上述指导思想，开发一个能够深入分析中国法律案例、提供准确推理和有益见解的人工智能模型。",
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
    lang: "cn",
    builtin: true,
    createdAt: 1688899480538,
  },

  {
    avatar: "1f4d1",
    name: "生成起诉状",
    context: [
      {
        id: "cv-0",
        role: "user",
        content: "请根据以下信息生成一份符合中国法律规范的起诉状。",
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
    lang: "cn",
    builtin: true,
    createdAt: 1688899480539,
  },

  {
    avatar: "1f4d1",
    name: "生成答辩状",
    context: [
      {
        id: "cv-0",
        role: "user",
        content: "请根据以下信息生成一份符合中国法律规范的答辩状。",
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
    lang: "cn",
    builtin: true,
    createdAt: 1688899480540,
  },
];
