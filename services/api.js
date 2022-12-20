import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://yftpoxnnvskrqtoofwbk.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlmdHBveG5udnNrcnF0b29md2JrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzE0NzU3OTAsImV4cCI6MTk4NzA1MTc5MH0.tPlmdpto7kkAySiCd44xQm-VLlrIgBphNa1dHjGwgpE",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlmdHBveG5udnNrcnF0b29md2JrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzE0NzU3OTAsImV4cCI6MTk4NzA1MTc5MH0.tPlmdpto7kkAySiCd44xQm-VLlrIgBphNa1dHjGwgpE"
    }
})
