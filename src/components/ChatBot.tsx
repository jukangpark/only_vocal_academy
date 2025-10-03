"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { MessageCircle, X, Send } from "lucide-react";

interface ChatMessage {
  id: string;
  message: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      message:
        "안녕하세요! 온리보컬 아카데미입니다. 아래 질문 중에서 궁금한 것을 선택해주세요! 🎤",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // 메시지가 추가될 때 자동 스크롤
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // 미리 정의된 질문 리스트
  const quickQuestions = [
    "상담 문의",
    "수강 안내",
    "강사 소개",
    "학원 위치",
    "운영 시간",
  ];

  const handleQuickQuestion = async (question: string) => {
    // 사용자 메시지 추가
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      message: question,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    // AI 응답 시뮬레이션 (실제로는 API 호출)
    setTimeout(() => {
      const botResponse = generateBotResponse(question);
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        message: botResponse,
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const generateBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    // 상담 문의
    if (lowerMessage.includes("상담") || lowerMessage.includes("문의")) {
      return "온리보컬 아카데미 상담 문의 안내입니다! 📞\n\n📍 주소: 광주 광산구 임방울대로332번길 9-14 GW빌딩 2층\n⏰ 사전 예약 필수\n📱 전화 상담 및 방문 상담 모두 가능합니다\n\n상담 시 체험 레슨도 함께 진행되니, 실제 레슨을 경험해보시고 결정하실 수 있어요!";
    }

    // 수강 안내
    else if (lowerMessage.includes("수강") || lowerMessage.includes("안내")) {
      return "온리보컬 아카데미 수강 안내입니다! 🎤\n\n✅ 개인 레슨과 그룹 레슨 모두 제공\n✅ 기초부터 고급 테크닉까지 체계적 교육\n✅ 개인별 맞춤 지도\n✅ 500여명 합격생 배출 실적\n\n수강 신청은 연락처 페이지의 전화번호로 문의하시거나, 학원을 직접 방문해서 상담받으실 수 있습니다!";
    }

    // 강사 소개
    else if (
      lowerMessage.includes("강사") ||
      lowerMessage.includes("선생님") ||
      lowerMessage.includes("코치")
    ) {
      return "온리보컬 아카데미 전문 강사진을 소개합니다! 👨‍🏫\n\n🎯 윤지현 원장 (15년 경력)\n• 500여명 합격생 배출\n• 음악대학 입시 전문\n\n🎯 한화정 부원장 (12년 경력)\n• 고급 보컬 테크닉 전문\n• 음악 치료사 자격\n\n🎯 김가희, 이다영, 배윤서, 김예찬 보컬코치\n• 각각 전문 분야별 특화 교육\n\n모든 선생님들이 체계적인 교육으로 최고의 보컬 실력을 기를 수 있도록 도와드립니다!";
    }

    // 학원 위치
    else if (
      lowerMessage.includes("위치") ||
      lowerMessage.includes("주소") ||
      lowerMessage.includes("어디")
    ) {
      return "온리보컬 아카데미 위치 안내입니다! 📍\n\n🏢 주소: 광주 광산구 임방울대로332번길 9-14 GW빌딩 2층\n🚗 주차 공간 마련\n🚌 대중교통 이용 편리\n\n네이버 지도에서 '온리보컬아카데미'를 검색하시면 정확한 위치를 확인하실 수 있습니다!";
    }

    // 운영 시간
    else if (
      lowerMessage.includes("운영") ||
      lowerMessage.includes("시간") ||
      lowerMessage.includes("영업")
    ) {
      return "온리보컬 아카데미 운영 시간 안내입니다! ⏰\n\n📅 평일과 주말 모두 레슨 가능\n🕐 개인별 스케줄에 맞춰 조정 가능\n📞 정확한 운영 시간은 연락처로 문의해주세요\n\n사전 예약 필수이니 방문 전에 미리 연락해주시면 됩니다!";
    }

    // 인사 관련
    else if (
      lowerMessage.includes("안녕") ||
      lowerMessage.includes("hello") ||
      lowerMessage.includes("hi")
    ) {
      return "안녕하세요! 온리보컬 아카데미에 오신 것을 환영합니다! 🎵 보컬 레슨이나 학원에 대해 궁금한 점이 있으시면 언제든 말씀해주세요!";
    }

    // 감사 인사
    else if (
      lowerMessage.includes("감사") ||
      lowerMessage.includes("고마워") ||
      lowerMessage.includes("thank")
    ) {
      return "천만에요! 온리보컬 아카데미에서 멋진 보컬 여정을 시작하시길 바랍니다! 🎤 더 궁금한 점이 있으시면 언제든 말씀해주세요!";
    }

    // 기본 응답
    else {
      return "좋은 질문이네요! 온리보컬 아카데미에 대해 더 자세히 알고 싶으시다면 홈페이지의 각 메뉴를 확인해보세요! 🎤 보컬 레슨, 선생님 소개, 시설, 위치 등 다양한 정보를 제공하고 있습니다. 특정 질문이 있으시면 더 구체적으로 말씀해주세요!";
    }
  };

  return (
    <>
      {/* 챗봇 토글 버튼 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-gray-600 hover:bg-gray-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="챗봇 열기"
      >
        {isOpen ? (
          <X className="w-6 h-6 cursor-pointer" />
        ) : (
          <MessageCircle className="w-6 h-6 cursor-pointer" />
        )}
      </button>

      {/* 챗봇 창 */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 z-40 w-80 h-[400px] md:w-96 md:h-[600px] lg:h-[700px] bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden">
          {/* 헤더 */}
          <div className="bg-white text-gray-600 p-3 flex items-center space-x-3 border-b border-gray-200">
            <div className="relative w-10 h-10 rounded-full">
              <Image
                src="/images/only_vocal_logo.jpg"
                alt="온리보컬 아카데미"
                fill
                className="object-contain rounded-full"
              />
            </div>
            <div>
              <h3 className="font-semibold text-gray-600">온리보컬 아카데미</h3>
              <p className="text-xs text-gray-500">AI 어시스턴트</p>
            </div>
          </div>

          {/* 채팅 컨테이너 */}
          <div className="h-[300px] md:h-[500px] lg:h-[600px] flex flex-col">
            <div className="flex-1 overflow-y-auto p-3 space-y-3">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-lg ${
                      msg.sender === "user"
                        ? "bg-black text-white"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{msg.message}</p>
                    <p className="text-xs mt-1 opacity-70">
                      {msg.timestamp.toLocaleTimeString("ko-KR", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* 빠른 질문 버튼들 */}
            <div className="p-3 border-t border-gray-200">
              <div className="space-y-2">
                <p className="text-xs text-gray-600 mb-2">자주 묻는 질문:</p>
                <div className="grid grid-cols-2 gap-1.5">
                  {quickQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickQuestion(question)}
                      className="text-left px-2 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800 rounded-md text-xs transition-colors border border-gray-300 hover:border-gray-500 cursor-pointer"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
