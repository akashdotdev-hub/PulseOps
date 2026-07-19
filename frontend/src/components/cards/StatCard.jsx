import { Card, CardContent, Typography } from "@mui/material";

function StatCard({ title, value }) {
  return (
    <Card
        sx={{
         height: "100%",
         borderRadius: 3,
        bgcolor: "background.paper",
         border: "1px solid",
        borderColor: "divider",
        transition: "0.3s",

        "&:hover": {
        borderColor: "primary.main",
        transform: "translateY(-3px)",
            },
        }}
    >
      <CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
        >
          {title}
        </Typography>

        <Typography
          variant="h4"
          sx={{
            mt: 2,
            fontWeight: "bold",
          }}
        >
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default StatCard;