import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = "https://gddnqwbbcrcugvglbfcc.supabase.co"
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdkZG5xd2JiY3JjdWd2Z2xiZmNjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ3NDAwNzYsImV4cCI6MjA4MDMxNjA3Nn0.BHgm6rgDBU8BCpxNqjI0s8Odeau3bKUlwjL2C8EdZZo'
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

export default supabase;