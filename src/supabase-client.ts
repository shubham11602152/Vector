import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY
);

export interface LoginFormDataType {
  email: string;
  password: string;
}
export interface SignUpFormDataType {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  agreeToTerms: boolean;
}

export const signUp = async (formData: SignUpFormDataType) => {
  const url = new URL("/login", window.location.href);
  const { email, password, firstName, lastName, phone } = formData;
  try {
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
      phone: phone,
      options: {
        emailRedirectTo: url.toString(),
        data: {
          first_name: firstName,
          last_name: lastName,
          phone: phone,
        },
      },
    });

    if (error) {
      throw error;
    }
    alert("Check your email for the verification link!");
  } catch (error) {
    alert((error as Error).message);
  }
};

export const login = async (
  formData: LoginFormDataType
): Promise<{ data?: unknown; error?: unknown; isLoginSuccessful: boolean }> => {
  const { email, password } = formData;
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      throw error;
    }
    alert("Login successful!");
    return {
      data,
      isLoginSuccessful: true,
    };
  } catch (error) {
    alert((error as Error).message);
    return {
      error,
      isLoginSuccessful: false,
    };
  }
};

export const logout = async () => {
  await supabase.auth.signOut();
  alert("Logged out successfully!");
};
