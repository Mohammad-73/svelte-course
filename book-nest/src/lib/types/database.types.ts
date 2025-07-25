export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      books: {
        Row: {
          author: string | null;
          cover_Image: string | null;
          created_at: string;
          description: string | null;
          finished_reading_on: string | null;
          genre: string | null;
          id: number;
          rating: number | null;
          started_reading_on: string | null;
          title: string;
          user_id: string;
        };
        Insert: {
          author?: string | null;
          cover_Image: string | null;
          created_at: string;
          description: string | null;
          finished_reading_on: string | null;
          genre: string | null;
          id: number;
          rating: number | null;
          started_reading_on: string | null;
          title: string;
          user_id: string;
        };
        Update: {
          author?: string | null;
          cover_Image: string | null;
          created_at: string;
          description: string | null;
          finished_reading_on: string | null;
          genre: string | null;
          id: number;
          rating: number | null;
          started_reading_on: string | null;
          title: string;
          user_id: string;
        };
        Relationships: [
          {
            forignKeyName: "book_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
      user_names: {
        Row: {
          created_at: string;
          id: number;
          name: string | null;
          user_id: string | null;
        };
        Insert: {
          created_at?: string;
          id?: number;
          name?: string | null;
          user_id?: string | null;
        };
      };
    };
  };
};
