import React from 'react';
import {
  Authenticator,
  ThemeProvider,
  Theme,
  useTheme,
  View,
  Image,
  Text,
  Heading,
  useAuthenticator,
  Button
} from '@aws-amplify/ui-react';

const components = {
  Header() {
    const { tokens } = useTheme();

    return (
      <View textAlign="center" padding={tokens.space.large}>
        <Heading level={1} color={tokens.colors.red[60]}>
          Cellarsofdw
        </Heading>
      </View>
    );
  },

  Footer() {
    const { tokens } = useTheme();

    return (
      <View textAlign="center" padding={tokens.space.large}>
        <Text color={tokens.colors.neutral[80]}>
          &copy; 2023 Cellarsofdw. All Rights Reserved.
        </Text>
      </View>
    );
  },

  SignIn: {
    Header() {
      const { tokens } = useTheme();

      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
          color={tokens.colors.red[60]}
        >
          Sign in to your account
        </Heading>
      );
    },
    Footer() {
      const { toResetPassword } = useAuthenticator();

      return (
        <View textAlign="center">
          <Button
            fontWeight="normal"
            onClick={toResetPassword}
            size="small"
            variation="link"
          >
            Forgot your password?
          </Button>
        </View>
      );
    },
  },

  SignUp: {
    Header() {
      const { tokens } = useTheme();

      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
          color={tokens.colors.red[60]}
        >
          Create a new account
        </Heading>
      );
    },
    Footer() {
      const { toSignIn } = useAuthenticator();

      return (
        <View textAlign="center">
          <Button
            fontWeight="normal"
            onClick={toSignIn}
            size="small"
            variation="link"
          >
            Already have an account? Sign in
          </Button>
        </View>
      );
    },
  },
};

const theme: Theme = {
  name: 'Auth Theme',
  tokens: {
    colors: {
      background: {
        primary: '#000000',
        secondary: '#1c1c1e',
      },
      font: {
        interactive: '#FFFFFF',
      },
      brand: {
        primary: {
          10: '#FF3B30',  // Bright red
          80: '#D50000',  // Darker red for hover states
          100: '#B71C1C', // Even darker for active states
        },
      },
    },
    components: {
      authenticator: {
        router: {
          borderColor: '{colors.brand.primary.10}',
        },
      },
      button: {
        primary: {
          backgroundColor: '{colors.brand.primary.10}',
          color: '{colors.font.interactive}',
          _hover: {
            backgroundColor: '{colors.brand.primary.80}',
          },
          _active: {
            backgroundColor: '{colors.brand.primary.100}',
          },
        },
      },
      fieldset: {
        borderColor: '{colors.brand.primary.10}',
      },
      field: {
        input: {
          borderColor: '{colors.brand.primary.10}',
          color: '#FFFFFF',
        },
        label: {
          color: '#FFFFFF',
        },
      },
    },
  },
};

export function CustomAuthenticator({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <Authenticator components={components}>
        {children}
      </Authenticator>
    </ThemeProvider>
  );
}