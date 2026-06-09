export type Program = {
  id: string
  user_id: string
  name: string
  slug: string
  website_url: string
  description: string | null
  commission_type: 'percentage' | 'fixed'
  commission_value: number
  commission_duration: 'one_time' | 'recurring' | 'limited'
  commission_months: number | null
  cookie_days: number
  minimum_payout: number
  status: 'active' | 'paused'
  created_at: string
  updated_at: string
}

export type Campaign = {
  id: string
  program_id: string
  name: string
  commission_type: 'percentage' | 'fixed'
  commission_value: number
  commission_duration: 'one_time' | 'recurring' | 'limited'
  commission_months: number | null
  status: 'active' | 'paused'
  created_at: string
}

export type Affiliate = {
  id: string
  program_id: string
  user_id: string | null
  campaign_id: string | null
  name: string
  email: string
  referral_code: string
  coupon_code: string | null
  status: 'pending' | 'active' | 'paused' | 'rejected'
  notes: string | null
  paypal_email: string | null
  wise_email: string | null
  created_at: string
  updated_at: string
}

export type Click = {
  id: string
  affiliate_id: string
  program_id: string
  ip_hash: string | null
  user_agent: string | null
  referrer: string | null
  landing_page: string | null
  created_at: string
}

export type Conversion = {
  id: string
  affiliate_id: string
  program_id: string
  click_id: string | null
  customer_email: string
  customer_name: string | null
  stripe_customer_id: string | null
  ls_customer_id: string | null
  conversion_value: number | null
  pipeline_stage:
    | 'trial'
    | 'demo_booked'
    | 'proposal_sent'
    | 'active'
    | 'churned'
  created_at: string
  updated_at: string
}

export type PipelineStageHistory = {
  id: string
  conversion_id: string
  stage: string
  notes: string | null
  created_by: string | null
  created_at: string
}

export type Commission = {
  id: string
  affiliate_id: string
  program_id: string
  conversion_id: string
  amount: number
  currency: string
  status: 'pending' | 'approved' | 'paid' | 'reversed' | 'flagged'
  stripe_invoice_id: string | null
  ls_order_id: string | null
  created_at: string
  updated_at: string
}

export type Payout = {
  id: string
  affiliate_id: string
  program_id: string
  amount: number
  currency: string
  status: 'requested' | 'approved' | 'processing' | 'paid' | 'rejected'
  payment_method: string | null
  notes: string | null
  created_at: string
  updated_at: string
}

export type Integration = {
  id: string
  program_id: string
  provider: 'stripe' | 'lemonsqueezy'
  account_id: string | null
  access_token: string | null
  webhook_secret: string | null
  metadata: Record<string, unknown> | null
  created_at: string
  updated_at: string
}
