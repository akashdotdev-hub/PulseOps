import { Card, CardContent, Typography } from "@mui/material";

function StatCard({ title, value }) {
  return (
    <Card
      sx={{
        height: "100%",
        borderRadius: 3,
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