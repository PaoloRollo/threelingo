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
          nft_image: string | null
          sections: Json | null
        }
        Insert: {
          created_at?: string
          description: string
          id?: number
          image?: string | null
          name: string
          nft_image?: string | null
          sections?: Json | null
        }
        Update: {
          created_at?: string
          description?: string
          id?: number
          image?: string | null
          name?: string
          nft_image?: string | null
          sections?: Json | null
        }
        Relationships: []
      }
      peanut_links: {
        Row: {
          courseId: number | null
          created_at: string
          id: number
          link: string | null
          status: string | null
        }
        Insert: {
          courseId?: number | null
          created_at?: string
          id?: number
          link?: string | null
          status?: string | null
        }
        Update: {
          courseId?: number | null
          created_at?: string
          id?: number
          link?: string | null
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "peanut_links_courseId_fkey"
            columns: ["courseId"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          }
        ]
      }
      progresses: {
        Row: {
          address: string
          completed: boolean | null
          course_id: number
          created_at: string
          current_section: number | null
          current_step: number | null
          current_unit: number | null
          id: number
        }
        Insert: {
          address: string
          completed?: boolean | null
          course_id: number
          created_at?: string
          current_section?: number | null
          current_step?: number | null
          current_unit?: number | null
          id?: number
        }
        Update: {
          address?: string
          completed?: boolean | null
          course_id?: number
          created_at?: string
          current_section?: number | null
          current_step?: number | null
          current_unit?: number | null
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "progresses_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          }
        ]
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
