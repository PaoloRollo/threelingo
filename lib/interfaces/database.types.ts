export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      courses: {
        Row: {
          created_at: string
          description: string
          id: number
          image: string | null
          name: string
          sections: Json | null
        }
        Insert: {
          created_at?: string
          description: string
          id?: number
          image?: string | null
          name: string
          sections?: Json | null
        }
        Update: {
          created_at?: string
          description?: string
          id?: number
          image?: string | null
          name?: string
          sections?: Json | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
