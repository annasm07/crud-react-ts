/* eslint-disable camelcase */
export default interface Restaurant {
    id: number,
    name: string,
    image_url: string,
    reviews: number[],
    food_type: string,
    address: string[],
    visited: boolean,
    open_hours:[{
        open_time:string,
        close_time:string
    }]
}
