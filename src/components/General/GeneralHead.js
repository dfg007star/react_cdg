import React from "react";
import styled from "styled-components";
import calendar from "../../assets/calendar.svg";

const HeadBase = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const CalendarLink = styled.a `
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
`
const Calendar = styled.div `
    align-items: center;
    display: flex;
    justify-content: space-between;
    height: 58px;
    width: 197px;
    background-color: #f0f3f5;
    border-radius: 30px;
`

const CalendarText = styled.span `
    display: inline;
    margin: 0 auto;
    font-family: Roboto;
    font-size: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 144.2%;
    font-variant: all-small-caps;
    color: #3744bd;
`

const CalendarIcon = styled.img `
    margin-left: 18px;
`

const Filter = styled.div `
    display: flex;
`

const FilterAllLink = styled.a `
   text-decoration: none;
   cursor: pointer;
`

const FilterAll = styled.div `
    align-items: center;
    display: flex;
    height: 47px;
    width: 79px;
    background-color: #f0f3f5;
    border-radius: 30px;
`
const FilterFavorites = styled.div `
    align-items: center;
    display: flex;
    height: 47px;
    width: 133px;
    background-color: none;
    border-radius: 30px;
`

const FilterAllText = styled.span `
    display: inline;
    margin: 0 auto;
    color: #4f4f4f;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 144.2%;
`

const FilterFavoritesText = styled.span `
    display: inline;
    margin: 0 auto;
    color: #bbbbbb;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 144.2%;
`

function GeneralHead() {
  return (
      <HeadBase>
          <CalendarLink>
            <Calendar>
               <CalendarText>10 june 2020
                   <CalendarIcon src={calendar} alr="calendar" />
                </CalendarText>
            </Calendar>
          </CalendarLink>
          <Filter>
              <FilterAllLink>
                <FilterAll>
                    <FilterAllText>All</FilterAllText>
                </FilterAll>
              </FilterAllLink>
              <FilterAllLink>
                <FilterFavorites>
                    <FilterFavoritesText>Favorites</FilterFavoritesText>
                </FilterFavorites>
              </FilterAllLink>
          </Filter>
      </HeadBase>
    );
  }

export default GeneralHead;