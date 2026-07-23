import {
  Card,
  CardContent,
  Skeleton,
  Stack,
} from "@mui/material";

const ContainerSkeleton = () => {
  return (
    <Stack spacing={2}>
      {[1, 2, 3, 4, 5].map((item) => (
        <Card key={item}>
          <CardContent>
            <Skeleton variant="text" width="30%" height={35} />
            <Skeleton variant="text" width="60%" />
            <Skeleton variant="rectangular" height={40} sx={{ mt: 2 }} />
          </CardContent>
        </Card>
      ))}
    </Stack>
  );
};

export default ContainerSkeleton;