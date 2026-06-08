import 'server-only'

import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export const PLAN_PRICE_ID = {
    'seeker_pro': 'price_1Tg38Y0yD5O7cVj3JjYnAKI7',
    'seeker_premium': 'price_1Tg3nv0yD5O7cVj3T0jDpwuh',
    'recruiter_growth': 'price_1Tg3oa0yD5O7cVj361I4jPqS',
    'recruiter_enterprise': 'price_1Tg3p50yD5O7cVj3vNJFTwdz',
}