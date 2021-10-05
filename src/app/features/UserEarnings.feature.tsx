import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";
import { withBoundaryError } from "../../core/hoc/withBondaryError";
import { useUser } from "../../core/hooks/useUser";
import { ValueDescriptor } from "../components/ValueDescriptor/ValueDescriptor";

export const UserEarnings = withBoundaryError(() => {
  const { fetchDetailedUser, user } = useUser();

  useEffect(() => {
    fetchDetailedUser(7);
  }, [fetchDetailedUser]);

  if (!user)
    return (
      <Wrapper>
        <Skeleton height={40} width={150} />
        <Skeleton height={40} width={150} />
        <Skeleton height={40} width={150} />
        <Skeleton height={40} width={150} />
      </Wrapper>
    );

  return (
    <Wrapper>
      <ValueDescriptor
        color="primary"
        description="Ganhos do mês"
        value={user.metrics.monthlyEarnings}
        isCurrency
      />
      <ValueDescriptor
        color="primary"
        description="Ganhos na semana"
        value={user.metrics.weeklyEarnings}
        isCurrency
      />
      <ValueDescriptor
        color="default"
        description="Ganhos de sempre"
        value={user.metrics.lifetimeEarnings}
        isCurrency
      />
      <ValueDescriptor
        color="default"
        description="Total de palavras"
        value={user.metrics.lifetimeWords}
      />
    </Wrapper>
  );
}, "earnings");

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
`;
