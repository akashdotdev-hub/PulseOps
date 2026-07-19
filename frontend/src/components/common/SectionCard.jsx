import { Card, CardContent, Typography, Box } from "@mui/material";

function SectionCard({ title, children }) {
  return (
    <Card
      sx={{
        bgcolor: "background.paper",
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 3,
        height: "100%",
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          sx={{
            mb: 3,
            fontWeight: 600,
          }}
        >
          {title}
        </Typography>

        <Box>
          {children}
        </Box>
      </CardContent>
    </Card>
  );
}

export default SectionCard;