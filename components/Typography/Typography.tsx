import React from "react";
import { Text } from "react-native";
import { textStyles } from "./TextStyles";

interface TypographyProps {
  children: string;
  color?: string;
}

export const Heading = ({ children, color }: TypographyProps) => {
  const textColor = color ? { color } : {};
  return (
    <Text style={[textStyles.heading, textColor]}>{children}</Text>
  )
};

export const Subheading = ({ children, color }: TypographyProps) => {
  const textColor = color ? { color } : {};
  return (
    <Text style={[textStyles.subheading, textColor]}>{children}</Text>
  )
};

export const Body = ({ children, color }: TypographyProps) => {
  const textColor = color ? { color } : {};
  return (
    <Text style={[textStyles.body, textColor]}>{children}</Text>
  )
};

export const Caption = ({ children, color }: TypographyProps) => {
  const textColor = color ? { color } : {};
  return (
    <Text style={[textStyles.caption, textColor]}>{children}</Text>
  )
};

export const Interactive = ({ children, color }: TypographyProps) => {
  const textColor = color ? { color } : {};
  return (
    <Text style={[textStyles.interactive, textColor]}>{children}</Text>
  )
};