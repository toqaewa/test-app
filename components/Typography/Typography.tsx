import React from "react";
import { Text } from "react-native";
import { textStyles } from "./TextStyles";

interface TypographyProps {
  children: string;
}

export const Heading = ({ children }: TypographyProps) => (
  <Text style={[textStyles.heading]}>{children}</Text>
);

export const Subheading = ({ children }: TypographyProps) => (
  <Text style={[textStyles.subheading]}>{children}</Text>
);

export const Body = ({ children }: TypographyProps) => (
  <Text style={[textStyles.body]}>{children}</Text>
);

export const Caption = ({ children }: TypographyProps) => (
  <Text style={[textStyles.caption]}>{children}</Text>
);

export const Interactive = ({ children }: TypographyProps) => (
  <Text style={[textStyles.interactive]}>{children}</Text>
);