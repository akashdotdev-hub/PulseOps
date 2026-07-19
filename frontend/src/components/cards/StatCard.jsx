import {
  Card,
  CardContent,
  Typography,
  Box,
} from "@mui/material";

function StatCard({
  title,
  value,
  icon,
  subtitle,
}) {
  return (
    <Card
      sx={{
        bgcolor: "background.paper",
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 4,
        transition: "all .25s",

        "&:hover": {
          borderColor: "primary.main",
          transform: "translateY(-4px)",
          boxShadow: "0 0 20px rgba(204,255,0,.15)",
        },
      }}
    >
      <CardContent>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <Box>

            <Typography
              variant="body2"
              color="text.secondary"
            >
              {title}
            </Typography>

            <Typography
              variant="h3"
              sx={{
                mt: 1,
                fontWeight: 700,
              }}
            >
              {value}
            </Typography>

            <Typography
              variant="body2"
              sx={{
                mt: 1,
                color: "secondary.main",
              }}
            >
              {subtitle}
            </Typography>

          </Box>

          <Box
            sx={{
              color: "primary.main",
              opacity: .9,
            }}
          >
            {icon}
          </Box>

        </Box>

      </CardContent>
    </Card>
  );
}

export default StatCard;