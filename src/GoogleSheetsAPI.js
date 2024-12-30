// Здесь будет твой API-ключ
const API_KEY = "AIzaSyAQ-UMkrkZ7LCvwwxYaBstkcUKFIN6kmBg";
const SHEET_ID = "1TYcE7JXoEsQoWjQ1dyREdrWbXVFNqO843AYySQVnD8g"; // Получи ID из URL Google Sheets документа

const fetchDataFromSheet = async (range) => {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${range}?key=${API_KEY}`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Ошибка при загрузке данных");
      }
  
      const data = await response.json();
  
      if (!data || !data.values || data.values.length === 0) {
        throw new Error("Данные отсутствуют или диапазон указан неверно");
      }
  
      return data.values; // Возвращаем значения
    } catch (error) {
      console.error("Ошибка при загрузке данных из Google Sheets:", error);
      return null; // Возвращаем null в случае ошибки
    }
  };
  

export default fetchDataFromSheet;
